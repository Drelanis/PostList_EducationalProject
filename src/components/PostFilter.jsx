import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
        type="text"
        placeholder="Найти статью..."
      ></MyInput>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
        defaultValue={'Сортировка'}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      ></MySelect>
    </>
  );
};

export default PostFilter;
