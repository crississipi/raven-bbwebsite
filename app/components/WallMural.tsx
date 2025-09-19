'use client'

const imagesWall = [
    {
        src: '/wallmuralimg1.png',
        title: '',
        description: ''
    },

     {
        src: '/wallmuralimg2.png',
        title: '',
        description: ''
    },

     {
        src: '/wallmuralimg3.png',
        title: '',
        description: ''
    },

     {
        src: '/wallmuralimg4.png',
        title: '',
        description: ''
    }
    
]

export default function Wallmural() {
    
    return(
        <div>
           <h3 className="text-2xl text-center mt-20">Wall Mural</h3>
           <img className="items-center flex justify-center ml-150" src="/wallmural.png" alt="" width={700} height={500}/>
        
        </div>
    )
}