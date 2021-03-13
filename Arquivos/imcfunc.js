function Calcular()
			{
				// IMC = P / (A*A)
				var peso	= document.getElementById("peso").value
				var altura 	= document.getElementById("altura").value
				
				var imcCalculado = peso / (altura * altura)
				//alert(imcCalculado)
				
				var oIMC = document.getElementById("IMC")
				oIMC.value = imcCalculado.toFixed(2)
				
				var oSituacao = document.getElementById("situacao")
				
				
				if (imcCalculado < 18.5) { oSituacao.innerHTML = "Magreza"}
				
				if ( (imcCalculado>=18.5) && (imcCalculado<25) )
				{
					oSituacao.innerHTML = "Normal"
				}
				
				if ( (imcCalculado>=25) && (imcCalculado<30) )
				{
					oSituacao.innerHTML = "Sobrepeso"
				}
				
				if ( (imcCalculado>=30) && (imcCalculado<40) )
				{
					oSituacao.innerHTML = "Obesidade"
				}
				
				if ( imcCalculado>=40 )
				{
					oSituacao.innerHTML = "Obesidade Grave"
				}	
			}