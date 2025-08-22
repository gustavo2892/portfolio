import { ProjectCard, ProjectGridCard } from '../';;

const descriptionMock = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';
const toolsMock = ['react', 'nodejs', 'redux', 'vuejs', 'angular']

export const ProjectsList = () => {
  return(
    <ProjectGridCard>
      <ProjectCard
        title='test'
        image="/assets/project-image.png"
        description={descriptionMock}
        tools={toolsMock}
      />
      <ProjectCard
        title='test'
        image="/assets/project-image.png"
        description={descriptionMock}
        tools={toolsMock}
      />
      <ProjectCard
        title='test'
        image="/assets/project-image.png"
        description={descriptionMock}
        tools={toolsMock}
      />
    </ProjectGridCard>
  );
}