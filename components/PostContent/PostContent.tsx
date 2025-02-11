import { HeaderBio } from "../HeaderBio/HeaderBio";
import md from 'markdown-it';
import { TagList } from "../TagList/TagList";

export default function PostPage({ frontmatter, content }) {
    return (
      <div className='prose mx-auto'>
        <HeaderBio presenation='min'/>
        <div className='flex flex-col gap-1'>
          <span className="font-bold text-lg">{frontmatter.title}</span>
          <span className="font-light text-xs">{new Date(frontmatter.lastUpdated).toDateString()}</span>
          <TagList tags={frontmatter.tags}/>
          <hr/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    );
  }