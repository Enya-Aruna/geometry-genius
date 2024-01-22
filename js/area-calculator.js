//1----> triangle 

function calculateTriAngleArea(){
    // get triangle base value
    const baseFeild = document.getElementById('Triangle-base') ;
    const baseValueText = baseFeild.value ;
    const base = parseFloat(baseValueText) ;
    baseFeild.value = '' ;
    if(isNaN(base)){
     alert('please provide a number')
     return ;
    }
    // get triangle height value
    const heightFeild  = document.getElementById('triangle-height') ;
    const heightValueText = heightFeild.value ;
    const height = parseFloat(heightValueText) ;
    heightFeild.value = '' ;
    if(isNaN(base)){
        alert('please provide a number')
        return ;
       }
      
       const area = 0.5 * base * height ;
    //    show triangle area
    const areaSpan = document.getElementById('area-triangle') ;
    areaSpan.innerText = area ;
    // add to calculation entry
    calculatorEntry('triangle' , area)
    }

    // 2 ----> rectangle 
    function calculateRectAngleArea(){
        //get rectangle width value
        const widthFeild = document.getElementById('rectangle-width') ;
        const widthValuetext = widthFeild.value ;
        const width = parseFloat(widthValuetext) ;
        widthFeild.value = '' ;
        if(isNaN(width)){
            alert('please provide a number')
            return ;
           }
          
        
        //get rectangle length value

        const lengthFeild = document.getElementById('rectangle-length') ;
        const lengthValuetext = lengthFeild.value ;
        const length = parseFloat(lengthValuetext) ;
        lengthFeild.value = '' ;
        if(isNaN(length)){
            alert('please provide a number')
            return ;
           }
          
        
        const area = width * length 
        //show rectangle area 

        const rectAngleareaSpan = document.getElementById('area-rectangle') ;
        rectAngleareaSpan.innerText = area ;
         // add to calculation entry
         calculatorEntry('rectangle' , area)
        
    }

    // reuseable function --> reduc duplicate case

    //parallelogram
    function calculateParallelogramArea(){
        const base = getInputValue('Parallelogram-base') ;
        const height = getInputValue('Parallelogram-height') ;
        if(isNaN(base) || isNaN(height)){
            alert('please provide a number')
            return ;
           }
          
        const area = base * height ;
         setTextFeildValue('area-Parallelogram' , area)   ;
          // add to calculation entry
        calculatorEntry('parallelogram' , area)
     }
     //Ellipse function

     function calculateEllipseArea(){
        const majorRadius = getInputValue('Ellipse-major-radius');
        const minorRadius = getInputValue('Ellipse-minor-radius');
        if(isNaN(majorRadius) || isNaN(minorRadius)){
            alert('please provide a number')
            return ;
           }
        const area = 3.1416 * majorRadius * minorRadius ;
        const areaToDecimal = area.toFixed(2) ;
        setTextFeildValue('area-Ellipse' , areaToDecimal)
         // add to calculation entry
         calculatorEntry('Ellipse' , areaToDecimal)
     }
    //    Rhombus-function
    function calculateRhombusArea(){
        const RhombusBase = getInputValue('Rhombus-base');
        const RhombusHeight = getInputValue('Rhombus-height');
        if(isNaN(RhombusBase) || isNaN(RhombusHeight)){
            alert('please provide a number')
            return ;
        }
        const area= 0.5 * RhombusBase * RhombusHeight ;
        setTextFeildValue('area-Rhombus' , area)
        // add to calculation entry
        calculatorEntry('Rhombus' , area)
    }
    //Pentagon-function
    function calculatePentagonArea(){
        const Pentagon_base = getInputValue('Pentagon-base');
        const Pentagon_Height = getInputValue('Pentagon-height');
        if(isNaN(Pentagon_base) || isNaN(Pentagon_Height)){
            alert('please provide a number')
            return ;
        }
        const area = 5 * (0.5 *Pentagon_base * Pentagon_Height);
        setTextFeildValue('area-Pentagon' , area)
        // add to calculation entry
        calculatorEntry('pentagon' , area)

    }

    function getInputValue(inputId){
        const inputFeild  = document.getElementById(inputId);
        const inputValueText = inputFeild.value ;
        const value = parseFloat(inputValueText) ;
        inputFeild.value = '' ;
       return value ;
    }

    function setTextFeildValue(elementId,  area){
        const element = document.getElementById(elementId) ;
       element.innerText = area ;
    }

    // Add to calculation entry
    /* 
    1.. find the element where you want to added the dynamic HTML
    2.. create an element you want to add
    3.. if needed add some class
    4..set innerHTML.it could be dynamic tamplete string
    5..append the create element as a child element of the parent
    6..

    */
    function calculatorEntry(areaType , area){
       
        const calculator_Entry = document.getElementById('calculator-entry');
        const count = calculator_Entry.childElementCount ;
        const p = document.createElement('p') ;
        p.classList.add("p-2")
        p.innerHTML = ` ${count + 1 }. ${areaType} ${area} cm <sup>2</sup> <button class = "btn px-2 btn-primary" >convert</button>` ;
        // p.innerHTML =areaType + " " +  area + "cm" ;
        calculator_Entry.appendChild(p)
      
    }
    