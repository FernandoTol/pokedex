const pokemones = [4, 5, 6, 37, 38, 58, 59, 77, 78, 126, 136, 146]

for (let i = 0; i < pokemones.length; i++) {

    document.addEventListener('DOMContentLoaded', () => {
        fetchApi()
    })

    const fetchApi = async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemones[i]}`);
            // const res = await fetch(`https://pokeapi.co/api/v2/type/5/`);
            console.log(pokemones.length)
            console.log(pokemones[i])
            const data = await res.json();
            console.log(data);
            const pokemon = {
                img: data.sprites.other.dream_world.front_default,
                nombre: data.name,
                hp: data.stats[0].base_stat,
                id: data.id,
                exp: data.base_experience,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                special: data.stats[3].base_stat
            }
            printCard(pokemon)
        } catch (err) {
            console.error(err);
        }

    }

    const printCard = (pokemon) => {
        console.log(pokemon);
        const flex = document.querySelector('.flex')
        const template = document.querySelector('#template-card').content
        const cloneTemplate = template.cloneNode(true)
        const fragment = document.createDocumentFragment()

        cloneTemplate.querySelector('.card-body-img').setAttribute('src', pokemon.img);
        cloneTemplate.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>hp: ${pokemon.hp}</span>`;
        cloneTemplate.querySelector('.card-body-exp').textContent = `${pokemon.exp} exp`;
        cloneTemplate.querySelector('.card-body-id').textContent = `no. pokemon: ${pokemon.id}`;
        cloneTemplate.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque;
        cloneTemplate.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.defensa;
        cloneTemplate.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.special;

        fragment.appendChild(cloneTemplate)
        flex.appendChild(fragment)

    }
}