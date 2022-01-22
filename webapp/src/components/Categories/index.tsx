import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]



const Categories = () => {
    return (
        <div className="my-6">
            <Select options={options}></Select>
        </div>
    )
}

export default Categories;