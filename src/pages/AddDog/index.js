import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { Wrapper, Form, InputContainer, Input, InnerForm , Title, Label, TempContainer, SelectContainer, Select, OptionSelected, ErrorMsg, ErrorContainer} from "./AddDog.styled"
import { handleData, handleSubmit } from './functions'

const AddDog = ({ dispatch })=>{

    const initialState = {
        nombre:'',
        alturaMin:'',
        alturaMax:'',
        pesoMin:'',
        pesoMax:'',
        vida:''
    }
    const [data,setData] = useState({...initialState,temperamento:[]})
    const [errors,setErrors] = useState(initialState)
    const { temps } = useSelector(state=>state.tempReducer)
    const navigate = useNavigate()
 
    const handleTemperament = (e)=>{
        const { value } = e.target

        setData({
            ...data,
            temperamento:[...data.temperamento,value]
        })
    }

    const deleteTemp = (e)=>{
        let { innerText } = e.target.parentNode.firstChild
        setData({
            ...data,
            temperamento:data.temperamento.filter(el=>el!==innerText)
        })
    }
    return(
        <Wrapper>
            <div>
                <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dog"/>
            </div>
            <Form onSubmit={e=>handleSubmit(e,errors,initialState,setData,navigate,dispatch,data)} >
                <InnerForm>
                    <Title>Create your own dog</Title>
                    <InputContainer direction={'column'}>
                    <Label>
                        Name: 
                        <Input 
                            required
                            autoComplete="off"
                            placeholder="Name" 
                            name='nombre'
                            onChange={e=>handleData(e,setErrors,setData,errors,data)}
                            value={data.nombre} 
                            res={'70%'}
                        />
                    </Label>
                    <ErrorMsg>{errors.nombre}</ErrorMsg>
                    <Label>
                        Height (cm): 
                        <InputContainer width={'70%'} justify={'space-between'}>
                            <Input
                                required
                                placeholder="Min Height"
                                autoComplete="off"
                                type='number'
                                name="alturaMin"
                                onChange={e=>handleData(e,setErrors,setData,errors,data)}
                                value={data.alturaMin}
                                len={'150px'}
                            />
                            <Input
                                required
                                type='number'
                                placeholder="Max Height"
                                autoComplete="off"
                                name="alturaMax"
                                onChange={e=>handleData(e,setErrors,setData,errors,data)}
                                value={data.alturaMax}
                                len={'150px'}
                            />
                        </InputContainer>
                    </Label>
                    <ErrorContainer>
                            <ErrorMsg len={'40%'} hei={'35px'}>{errors.alturaMin}</ErrorMsg>
                            <ErrorMsg len={'40%'} hei={'35px'}>{errors.alturaMax}</ErrorMsg>
                    </ErrorContainer>
                    <Label>
                        Weight (Kg): 
                        <InputContainer width={'70%'} justify={'space-between'}>
                            <Input
                                required
                                placeholder="Min Weight"
                                autoComplete="off"
                                type='number'
                                name="pesoMin"
                                onChange={e=>handleData(e,setErrors,setData,errors,data)}
                                value={data.pesoMin}
                                len={'150px'}
                            />
                            <Input
                                required
                                placeholder="Max Weight"
                                autoComplete="off"
                                type='number'
                                name="pesoMax"
                                onChange={e=>handleData(e,setErrors,setData,errors,data)}
                                value={data.pesoMax}
                                len={'150px'}
                            />
                        </InputContainer>
                    </Label>
                    <ErrorContainer>
                        <ErrorMsg len={'45%'} hei={'35px'}>{errors.pesoMin}</ErrorMsg>
                        <ErrorMsg len={'45%'} hei={'35px'}>{errors.pesoMax}</ErrorMsg>
                    </ErrorContainer>
                    <Label>
                        Life span: 
                        <Input
                            required
                            placeholder="n1 - n2 years"
                            autoComplete="off"
                            type='text'
                            name="vida"
                            onChange={e=>handleData(e,setErrors,setData,errors,data)}
                            value={data.vida}
                            res={'70%'}
                        />
                    </Label>
                    <ErrorMsg>{errors.vida}</ErrorMsg>
                    </InputContainer>
                    <TempContainer>
                        <h2>Temperamentos:</h2>
                        <SelectContainer>
                            <Select onChange={handleTemperament}>
                                {temps.map(temp=>{
                                    return(
                                            <option key={temp.id} value={temp.name}>{temp.name}</option>
                                    )
                                })}
                            </Select>
                        </SelectContainer>
                        <OptionSelected>
                            {data.temperamento?
                                data.temperamento.map((temp,index)=>{
                                    return(
                                        <div key={index}>
                                            <p>{temp}</p>
                                            <span onClick={deleteTemp}>X</span>
                                        </div>
                                    )
                                }):''}
                        </OptionSelected>
                    </TempContainer>
                    <button>Create</button>
                </InnerForm>
            </Form>
        </Wrapper>
    )
}
export default AddDog