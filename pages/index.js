import { useState } from "react";
import Button from "../components/Button"

function Home() {
    const [hardWork, setHardWork] = useState();
    const [showQuestion, setShowQuestion] = useState(true)

    return (
        <div 
            style={{
                height: "90vh", 
                fontFamily: "sans-serif", 
                display: "flex", 
                flexDirection: "column",
                alignItems: "center", 
                justifyContent: "center",
            }}
        >
            {
                showQuestion ? (
                    <form
                        style={{
                            display: "flex", 
                            flexDirection: "column",
                            alignItems: "center", 
                            justifyContent: "center",
                            border: "1px solid #000",
                            borderRadius: 8,
                            padding: 20,
                        }}
                        onChange={(e) => {
                            setHardWork(e.target.value === "true")
                        }}
                        onSubmit={() => setShowQuestion(false)}
                    >
                        <p>Dia difícil no trabalho hoje mor?</p>
                        <div>
                            <input 
                                style={{ margin: 10 }}
                                type="radio" 
                                id="yes" 
                                name="hardWork" 
                                value="true"
                            />
                            <label htmlFor="yes">Sim</label>
                        </div>
                        <div>
                            <input 
                                style={{ margin: 10 }}
                                type="radio" 
                                id="no" 
                                name="hardWork" 
                                value="false"
                            />
                            <label htmlFor="no">Não</label>
                        </div>
                        <Button>Enviar</Button>
                    </form>
                ) : (
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column",
                        alignItems: "center", 
                        justifyContent: "center",
                        border: "1px solid #000",
                        borderRadius: 8,
                        padding: 20,
                    }}>
                        {
                            hardWork 
                                ? 
                                    <p>
                                        Tenho muito orgulho de você e sei que é forte, mas um presente ajuda né? hehehe Então... 
                                        <b>
                                            PARABÉNS, VOCÊ ACABA DE GANHAR UM VALE RODÍZIO JAPONÊS!!!
                                        </b>
                                    </p>
                                : <p>Que bom que foi um dia tranquilo! Saiba que te amo muito</p>
                        }
                        <Button onClick={() => setShowQuestion(true)}>Voltar</Button>
                    </div>
                ) 
            }
        </div>
        
    )
}

export default Home;