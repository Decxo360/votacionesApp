import React from 'react'

export const LoginPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center w-[100%]'>
            <div className=' flex flex-col justify-center items-center w-[50%]'>
                <form action="">
                    <label htmlFor=""></label>
                    <input type="text" />
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" />
                </form>
                <div>
                    <h1>¿No has ingresado nunca? <Link to={'/'}> ¡registrate acá!</Link> </h1>
                    <button className=' w-[50%] h-[50px] text-white' > Logearse </button>
                </div>
            </div>

        </div>
    )
}
