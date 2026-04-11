function run(){
let input=document.getElementById('input').value||"";
let output="";
let notes="";

// formatter
if(input.includes("fun") || input.includes("class")){
  output += input.replace(/\{/g,"{\n").replace(/\}/g,"\n}\n");
  notes += "Basic formatting applied.\n";
}

// null safety
if(input.includes("!!")){
  notes += "Unsafe null assertion (!!) detected.\n";
}
if(input.includes("?.")){
  notes += "Safe call operator detected.\n";
}

// data class
if(input.includes("class")){
  output += "\ndata class Example(val id: Int)\n";
}

// extension
if(input.includes("fun")){
  output += "\nfun String.customExt() = this.length\n";
}

// coroutine
if(input.includes("suspend") || input.includes("launch")){
  notes += "Coroutine usage detected.\n";
}

if(!notes) notes="No major patterns detected.";

document.getElementById('result').innerText =
"Output:\n"+output+"\nNotes:\n"+notes;
}
