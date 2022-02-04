import Axios from 'axios'
import { DOG, DOGS, dogs } from '../../../routes'
import { getDogs } from '../../../Redux/actions'


export const handleData = (e,setErrors,setData,errors,data)=>{
        
    let {name,value} = e.target

    if(name === 'nombre'){
        let regex = /^[A-Z][a-z]+\s{0,1}[A-Z]*[a-z]*\s{0,1}[A-Z]*[a-z]*$/
        if(!regex.test(value)){
            setErrors({...errors,[name]:"Start with a capital letter and don't write numbers"})
        }else{
            setErrors({...errors,[name]:''})
        }
    }
    if(name === 'pesoMin'){
        if(isNaN(Number(value))){
            return setErrors({...errors,[name]:'Only numbers'})
        }
        if(Number(value) <= 5 || (data.pesoMax && Number(value) > data.pesoMax)){
            setErrors({...errors,[name]:'Insert a logical value'})
        }else{
            setErrors({...errors,[name]:''})
        }
    }
    if(name === 'pesoMax'){
        if(isNaN(Number(value))){
            return setErrors({...errors,[name]:'Only numbers'})
        }
        if(Number(value) > 150 || (data.pesoMin && Number(value) < data.pesoMin)){
            setErrors({...errors,[name]:'Insert a logical value'})
        }else{
            setErrors({...errors,[name]:''})
        }
    }
    if(name === 'alturaMin'){
        if(isNaN(Number(value))){
            return setErrors({...errors,[name]:'Only numbers'})
        }
        if(Number(value) < 1 || (data.alturaMax && Number(value) > data.alturaMax)){
            setErrors({...errors,[name]:'Insert a logical value'})
        }else{
            setErrors({...errors,[name]:''})
        }
    }
    if(name === 'alturaMax'){
        if(isNaN(Number(value))){
            return setErrors({...errors,[name]:'Only numbers'})
        }
        if(Number(value) > 120 || (data.alturaMin && Number(value) < data.alturaMin)){
            setErrors({...errors,[name]:'Insert a logical value'})
        }else{
            setErrors({...errors,[name]:''})
        }
    }
    if(name === 'vida'){
        let regex = /[0-9]?[0-9]\s-\s[0-9]?[0-9]\syears$/
        if(!regex.test(value)){
            setErrors({...errors,[name]:'It shoul have this form: n1 - n2 years'})
        }else{
            setErrors({...errors,[name]:''})
        }
    }
    setData({
        ...data,
        [name]:value
    })
}

export const handleSubmit = async (e,errors,initialState,setData,navigate,dispatch,data)=>{
    e.preventDefault()
    if(errors.alturaMax || errors.alturaMin || errors.nombre || errors.pesoMax || errors.pesoMin || errors.vida){
        return 
    }
    await Axios.post(DOG,data)
    await Axios.get(DOGS).then(res=>{
        dispatch(getDogs(res.data))
        setData(initialState)
    })
    navigate(dogs)
}