const { Post } = require('../models');

const postData = [
  {
    title: 'Sample Tittle 1',
    post_text: 'Consequat sit irure anim excepteur ipsum do irure occaecat. Non ullamco Lorem aliquip deserunt reprehenderit consectetur proident non non anim cupidatat. Ipsum nulla exercitation fugiat fugiat labore.',
    user_id: 1,
  },
  {
    title: 'Sample Tittle 2',
    post_text: 'Ex labore cillum do amet qui eu consequat enim incididunt commodo ad culpa mollit tempor. Culpa ipsum minim mollit aute cupidatat proident duis enim consectetur. Nulla duis ex culpa esse do amet excepteur proident ex adipisicing. Incididunt nisi nostrud aliqua in. Ullamco enim irure officia sit..',
    user_id: 2,
  },
  {
    title: 'Sample Tittle 3',
    post_text: 'Tempor sunt Lorem et adipisicing veniam elit ut. Nulla voluptate aliquip aute irure laborum quis id laborum duis dolor proident. Lorem commodo ullamco dolor officia qui non adipisicing non eiusmod commodo aliquip commodo tempor.',
    user_id: 2,
  },
  {
    title: 'Sample Tittle 4',
    post_text: 'Qui consectetur occaecat aute tempor eu consectetur aliquip ipsum. Velit laboris laborum commodo pariatur laborum ex sit deserunt. Labore magna ut magna pariatur reprehenderit sunt deserunt. Exercitation nisi in Lorem sint. Minim deserunt quis fugiat pariatur.',
    user_id: 3,
  },
  {
    title: 'Sample Tittle 5',
    post_text: 'Ullamco est officia aliqua reprehenderit exercitation eiusmod ut. Aliquip dolor velit velit consequat deserunt consectetur aliquip occaecat est reprehenderit anim culpa. Elit aliquip qui elit deserunt cupidatat voluptate ad pariatur in amet mollit. Eiusmod ullamco proident reprehenderit laboris id eiusmod esse magna minim sit eu ea deserunt. Enim proident irure mollit officia non exercitation dolore est sit nulla proident proident ullamco. In elit incididunt dolor ea ut mollit ex dolore consectetur dolore deserunt nostrud sint. Tempor magna esse officia nisi ullamco aute aliquip ea nulla.',
    user_id: 4,
  },
  {
    title: 'Sample Tittle 6',
    post_text: 'Veniam esse deserunt elit quis deserunt cupidatat. Id consequat id cillum exercitation ex commodo ad culpa ad. Nisi nulla tempor est exercitation dolore qui duis sunt aute minim magna ut sit. Velit adipisicing minim pariatur enim et. Lorem proident non tempor officia nostrud ut cupidatat dolore sit ullamco anim.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;