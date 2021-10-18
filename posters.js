AFRAME.registerComponent("posters",{
    init:function(){
        this.placescontainer=this.el
        this.createposters()
    },
    createposters:function(item){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:"20",
            height:"28"
        });
        
        entityEl.setAttribute("position", {x:0,y:5,z:0.1});
        entityEl.setAttribute("material", {src:item.url});

        const thumbnailsref=[
            {
            id:"super-man",
            title:"superman",
            url:"./assets/superman.jpg"
            },
            {
            id:"hulk",
            title:"Hulk",
            url:"./assets/marvel-hulk-comic-i15062.jpg"
            },
            {
            id:"aquaman",
            title:"Aquaman",
            url:"./assets/aquaman.jpg"
            },
            {
            id:"iron-man",
            title:"Ironman",
            url:"./assets/ironman.jpg"
            }
        ]
        var previousXpos=-60
        for(var i of thumbnailsref){
            const posx=previousXpos+25
            const posy=10
            const posz=-40
            const pos={x:posx,y:posy,z:posz}
            previousXpos=posx
            const borderel=this.createborder(pos,i.id)
            const thumbnails=this.createthumbnails(i)
            borderel.appendChild(thumbnails)
            const titleel=this.createtitle(pos,i)
            this.placescontainer.appendChild(borderel)
        }
        
    },

    createborder:function(pos,id){
        const entityel=document.createElement("a-entity")
        entityel.setAttribute("id",id)
        entityel.setAttribute("visible",true)
        entityel.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
        entityel.setAttribute("position",pos)
        entityel.setAttribute("material",{color:"#0077cc",opacity:1})
        return entityel
    },

    createthumbnails:function(item){
        const entityel=document.createElement("a-entity")
        entityel.setAttribute("visible",true)
        entityel.setAttribute("geometry",{primitive:"circle",radius:9})
        entityel.setAttribute("material",{src:item.url})
    },

    createtitle:function(pos,item){
        const entityel=document.createElement("a-entity")
        el.setAttribute("text",{font:"exo2bold",align:"center",color:"#e65100",value:item.title})
        const elpos=pos
        elpos.y=-20
        entityel.setAttribute("position",elpos)
        entityel.setAttribute("visible",true)
        return entityel
    },


})
