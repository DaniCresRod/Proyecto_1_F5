//Este fragmento de codigo hace lo siguiente:
//1.- Selecciono TODOS los elementos con la clase ".icono_mas"
//2.- A CADA ELEMENTO (forEach) le asigno un escuchador de eventos (para ver si se hace click en ello)
//3.- Defino que pasa cuando alguien hace click en uno de ellos
document.querySelectorAll(".icono_mas").forEach(elemento => {
    elemento.addEventListener("click", entrada =>{

        //Almaceno en una variable:
        //"entrada.target" es donde hice click
        //"entrada.target.parentNode" es el PADRE de donde hice click
        //"entrada.target.parentNode.children[1]" es el SEGUNDO hijo de ese padre
        //estoy guardando, por tanto, el acceso la barra de progreso
        const barrita= entrada.target.parentNode.children[1];                            

        //Guardo en una variable el valor actual de la barrita
        let valor=barrita.value;

        //Si el valor de la barrita esta por debajo de 100, le suma 10
        if(valor<100){
            barrita.value=valor+10; //Actualiza el valor de la barrita
        }
    });
});

//Este fragmento de codigo hace lo mismo que el de arriba, pero restando 10
document.querySelectorAll(".icono_menos").forEach(elemento => {
    elemento.addEventListener("click", entrada =>{
        const barrita= entrada.target.parentNode.children[1];                            

        let valor=barrita.value;
        if(valor>0){
            barrita.value=valor-10
        }
    });
});

//Este fragmento controla la barra de progreso
//Capturamos el numero de imagenes que hay sobre la barra (que son los hijos de "#barra_progreso" con clase ".icono")
var numeroDeNodos= document.querySelectorAll("#barra_progreso .icono").length;

//Para cada nodo (forEach) le asignamos un escuchador de eventos "click"
document.querySelectorAll("#barra_progreso .icono")
    .forEach(elemento =>{
        elemento.addEventListener("click", entrada=>{
            
            //Identificamos la barra de estado(hijo 3 del padre del padre del icono que toco (target))
            const barrita=entrada.target.parentNode.parentNode.children[2];            

            //Asigno 0 a una variable, que es donde guardaremos el valor que queremos que tenga la barra
            let valor=0;

            //Recorremos los nodos...
            for(let i=0; i<numeroDeNodos; i++){
                
                //...hasta que identifiquemos que numero de hijo tiene el icono que clicamos...
                if(entrada.target===entrada.target.parentNode.children[i]){
                    
                    //... Identificado el numero de nodo, asignamos el valor y salimos del bucle
                    valor=(i+1)*10;
                    break;
                }
            }
            
            //Asignamos el valor a la barra de progreso
            barrita.value=valor;
        });     
    });
