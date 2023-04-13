import {React,useState} from 'react'

export const AddCategory = ({onNewcategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChancge =({target})=>{
        setInputValue(target.value);
    }
    
    const onSubmit =(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
        onNewcategory(inputValue.trim());
        setInputValue('');
    }
  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={onInputChancge}
        />
    </form>
  )
}


