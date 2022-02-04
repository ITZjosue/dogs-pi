import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Form from './index'

const temps = [
    {id:1,name:'Aggresive'},
    {id:2,name:'Social'}
]

describe('<Form/> mounted',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(<Form temps={temps}/>)
    });
    it('EL form debe tener un boton con nombre "Search":',()=>{
        const { container } = render(<Form temps={temps}/>)
        const element = container.querySelectorAll('button')[0]
        expect(element.innerHTML).toBe('Search')
    })
    it('El form debe tener un boton con el texto "Add a dog"',()=>{
        const {container} = render(<Form temps={temps}/>)
        const element = container.querySelectorAll('button')[1]
        expect(element.innerHTML).toBe('Add a Dog')
    })
    it(`El form debe tener etiquetas Select`,()=>{
        const { container } = render(<Form temps={temps}/>)
        const element = container.querySelectorAll('select')
        expect(element.length>0).toBe(true)
    })
    it('El form debe contener un input de tipo texto',()=>{
        const { container } = render(<Form temps={temps} />)
        const element = container.querySelector('input')
        expect(element.type).toBe('text')
    })
})