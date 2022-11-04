# Car Rent App

> B2C 차량대여 서비스 모바일 UI 개발 토이 프로젝트
>
> 📆 개발 기간 : 2022.10.31 ~ 2022.11.03
>
> [🌍 배포 링크](https://car-list-app.vercel.app/)

<br />

## 프로젝트 설치 및 실행 ✨

```plaintext
$ git clone https://github.com/genuine-seok/car-rent-app.git // Git 클론
$ npm install  // 프로젝트 패키지 설치
$ npm start    // 프로젝트 실행
```

<br />

## 기술 스택 🛠

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/axios-5AE9E4?style=for-the-badge&logo=axios&logoColor=white">

<br />

## 프로젝트 구조 🗂

```bash
src
 ┣ apis              // axios 인스턴스 및 api 서비스 (차량 조회)
 ┣ components        // 공용 컴포넌트
 ┣ constant          // 상수 관리
 ┣ contexts          // Context 관리 (카테고리 상태 관리)
 ┣ hooks             // useCarData 비동기 통신 커스텀 훅
 ┣ pages             // 페이지 컴포넌트
 ┣ style             // 전역 스타일, 테마
 ┣ types             // 공통 타입 관리
 ┣ utils             // 공통 유틸 함수 (getFormattedPrice, getStartDate, isNewCar)
 ┣ App.tsx
 ┗ index.tsx
```

<br />

## 핵심 기능 📍

### 1) 차량 목록 조회 기능
- 카테고리별 차량 목록 필터링 
- 로딩, 에러, Empty 상태별 렌더링
- 생성 날짜 1일 이내일 경우 신규 태그 제공

- TODO: 좌우 스와이프 인터랙션 구현
- TODO: 무한 스크롤링 구현

### 2) 차량 상세정보 조회 기능
- 뒤로가기 기능 

### 3) SEO
- TODO: 카카오톡, 페이스북에 공유 시 미리보기 제공

<br />

## 주요 기능 구현 ⚙️

### 1) Context API를 활용한 카테고리 상태 관리
: `Context API` 를 이용해 ItemGroup의 active Item 상태를 관리
- Item 내부에서 useItemGroup context 를 이용해
동적 스타일링 여부 및 activeId 변경 로직을 props drilling 없이 전달.

```javascript
// ItemGroupContext.ts
const ItemGroupContext = createContext<ItemGroupValueProps | null>(null);

export const ItemGroup = ({ children, activeId, onSelect }: ItemGroupProps) => {
  const value = useMemo(
    () => ({
      activeId,
      onSelect,
    }),
    [activeId, onSelect]
  );
  return (
    <ItemGroupContext.Provider value={value}>
      {children}
    </ItemGroupContext.Provider>
  );
};

export const useItemGroup = () => {
  const value = useContext(ItemGroupContext);
  if (!value) throw new Error("Item component should be used within ItemGroup");
  return value;
};

// Home.tsx

const Home = () => {
  const [activeId, setActiveId] = useState(0);
  const slide = category.map((item) => <Slide key={item} category={item} />);

  return (
    <>
      <Header>전체차량</Header>
      <Category activeId={activeId} setActiveId={setActiveId} />
      // TODO: 슬라이딩 UI 구현 
      {slide[activeId]}
    </>
  );
};

// Cateogry.tsx

export const Category = ({
  activeId,
  children,
  setActiveId,
}: CategoryProps) => {
  return (
    <CategoryGroup activeId={activeId} onSelect={setActiveId}>
      <S.CategoryBlock>
        {children}
        {category.map((item, idx) => (
          <CategoryItem value={item} key={item} id={idx} />
        ))}
      </S.CategoryBlock>
    </CategoryGroup>
  );
};

// CategoryItem.tsx

export const CategoryItem = ({ value, id }: ICategoryItem) => {
  const { activeId, onSelect } = useItemGroup();
  const isActive = activeId === id;
  const onClick = () => onSelect(id);

  return (
    <div onClick={onClick}>
      <Chip isActive={isActive}>{value}</Chip>
    </div>
  );
};

```

<br />

### 2) React-Query 를 활용한 서버 데이터 관리
: `React-Query` 를 이용해 useCarData 커스텀 훅으로 비동기 통신 로직 관리
- isLoading, isError 여부에 따라 Loading, Error 컴포넌트를 return
- 그 외에는 전달받은 데이터를 ItemList의 props로 전달

```javascript

// useCarData.ts

import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

import CarService from "../apis/CarService";
import { CarDataType, CategoryParam } from "../types";

type CarDataPayload = {
  payload: CarDataType[];
};

export const useCarData = (segment: CategoryParam) => {
  const params = {
    segment,
  };
  return useQuery<AxiosResponse<CarDataPayload>, AxiosError>(
    [`get-cars-${segment}`, segment],
    async () => {
      const res = await CarService.getCar(params);
      return res;
    }
  );
};

// Slide.tsx

export const Slide = ({ category }: ISlide) => {
  const segmentParams = categoryMap[category];

  const { isLoading, isError, data, error, isFetching } =
    useCarData(segmentParams);

  if (isLoading || isFetching) return <Loading />;
  if (isError) return <Error message={error.message} />;

  const items = data?.data.payload as CarDataType[];

  return (
    <S.SlideContainer>
      <ItemList items={items} />
    </S.SlideContainer>
  );
};
```

<br />

### 3) react-router Link를 이용한 차량 상세 정보 state 전달
: `Link` 컴포넌트를 이용해 아이템 클릭시, 리다이렉팅 및 state 정보 전달

```javascript

// ItemCard.tsx

export const ItemCard = ({ carData }: ItemCardProps) => {
  const { id, amount, attribute, createdAt } = carData;

  const { brand, name, segment, fuelType, imageUrl } = attribute;

  return (
    <Link to={`/${id}`} state={{ carData }}>
      <S.ItemCardContainer>
        <S.ItemCardTextBlock>
          <S.ItemCardTitle>{brand}</S.ItemCardTitle>
          <S.ItemCardTitle>{name}</S.ItemCardTitle>
          <S.ItemCardDescription>{`${segmentMap[segment]} / ${fuelMap[fuelType]}`}</S.ItemCardDescription>
          <S.ItemCardDescription>
            월 ${getFormattedPrice(amount)}원 부터
          </S.ItemCardDescription>
        </S.ItemCardTextBlock>
        <S.ItemCardNotification>
          {isNewCar(createdAt) && <Chip type="notification">신규</Chip>}
        </S.ItemCardNotification>
        <S.ItemCardImage src={imageUrl} />
      </S.ItemCardContainer>
    </Link>
  );
};

// CarDetail.tsx

const CarDetail = () => {

  // 링크 클릭 없이 url로 직접 이동한 경우, 홈으로 리다이렉팅 합니다.
  const { state } = useLocation();
  if (!state) return <Navigate to="/" replace />;

  const { carData }: { carData: CarDataType } = state;

  return (
    <>
      {/* <Head carData={carData} /> */}
      <Header>차량상세</Header>
      <ItemDetail carData={carData} />
    </>
  );
};

export default CarDetail;

// ItemDetail.tsx

const ItemDetail = ({ carData }: ItemDetailProps) => {
  const { amount, attribute, startDate, insurance, additionalProducts } =
    carData;
  const { brand, name, segment, fuelType, imageUrl } = attribute;

  return (
    <S.ItemDetailContainer>
      <S.ItemDetailImage src={imageUrl} />
      <S.ItemDetailMain>
        <S.ItemDetailTitleBlock>
          <S.ItemDetailSubTitle>{brand}</S.ItemDetailSubTitle>
          <S.ItemDetailTitle>{name}</S.ItemDetailTitle>
          <S.ItemDetailDescription>
            월 ${getFormattedPrice(amount)}원
          </S.ItemDetailDescription>
        </S.ItemDetailTitleBlock>
      </S.ItemDetailMain>
      <Section name="차량정보" />
      <SectionItem label="차종" value={segmentMap[segment]} />
      <SectionItem label="연료" value={fuelMap[fuelType]} />
      <SectionItem label="이용 가능일" value={getStartDate(startDate)} />
      {insurance && (
        <>
          <Section name="보험" />
          {insurance.map((data) => (
            <SectionItem
              key={data.name}
              label={data.name}
              value={data.description}
            />
          ))}
        </>
      )}
      {additionalProducts && (
        <>
          <Section name="보험" />
          {additionalProducts.map((data) => (
            <SectionItem
              key={data.name}
              label={data.name}
              value={data.amount}
            />
          ))}
        </>
      )}
    </S.ItemDetailContainer>
  );
};

export default ItemDetail;

```
