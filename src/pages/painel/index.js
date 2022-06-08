import React, {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './painel.css';
import '../../components/MenuPainel';

import {ImHome} from 'react-icons/im';
import {BsGearFill} from 'react-icons/bs';
import {TiEdit} from 'react-icons/ti';
import {FaUserAlt} from 'react-icons/fa';
import {FaPaste} from 'react-icons/fa';
import {IoMdExit} from 'react-icons/io';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

export default function Painel() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return(
       <>
            

            <header className='header-painel'>
                <div className="hdbox">
                    <h2>Painel</h2>
                    <a href="siteTCC.html" className="logo"> ConnTec</a> 
                </div>
            
                <div className="hamburguer">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            
            </header>

            <div className="app">
                <div className="content-menubar">
                    <div className="menubar">
                        <ul>
                            <li><a href='/'><ImHome className='faicon'/>Início</a></li>
                            <li><a href='#'><BsGearFill className='faicon'/>Config</a></li>
                        </ul>
                    </div>
                    <span className="line"></span>
                    <div className="area-admin">
                        <ul>
                            <li><a href=""><TiEdit className='faicon'/>Post</a></li>
                            <li><a href=""><FaUserAlt className='faicon'/>Users</a></li>
                            <li><a href=""><FaPaste className='faicon'/>Perm</a></li>
                        </ul>
                        
                            
                        
                    </div>
                    <div className="content-exit">
                        <ul>
                            <li>
                                <a href="">
                                    <IoMdExit className='faicon'/>
                                    Sair
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-box-options'>
                    <h1 style={{color: 'black', marginBottom: '12px', fontWeight: 600}}>Titulo para Postagem:</h1>
                    <input 
                    type='text' 
                    placeholder='Titulo da Postagem.' 
                    style={{
                        width: '700px',
                        height: '40px',
                        borderRadius: '5px',
                        marginBottom: '30px',
                    }}/>
                    <h1 style={{color: 'black', marginBottom: '12px', fontWeight: 600}}>Conteudo da Postagem:</h1>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
                        apiKey='lcxq3g3d1gmhzadd8lz229tw8cu24wvhotcnkc4diz3tthlg'
                        init={{
                            height: 500,
                            width: 900,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        className='editor-tiny'
                    />
                    <button onClick={log}>Enviar</button>

                    <br/>

                    <select className='pn-menu-options'>
                        <option value="">Tipo de Postagem</option>
                        <option value="">Aviso</option>
                        <option value="">Noticia</option>
                        <option value="">Gremio</option>
                        <option value="">Monitoria</option>
                    </select>   
                </div>
            </div>
       </> 
    );
};

