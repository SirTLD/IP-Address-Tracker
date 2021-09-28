import {
  DataContainerDiv,
  DataTitleH2,
  DataValue,
} from '../BodyContainer/BodyContainerItems';

// export const DataEntry = ({ title, text, data, city, region, postalcode }) => {
export const DataEntry = ({ title, text, data }) => {
  return (
    <>
      <DataContainerDiv>
        <DataTitleH2>{title}</DataTitleH2>
        <DataValue>
          {text}
          {data}
        </DataValue>
      </DataContainerDiv>
    </>
  );
};
