import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
  return (
    <div>
      <DiscussionEmbed
        shortname="microblog-6"
        config={{
            url: `https://microblock.app/post/${post.id}/${encodeURI(post.title)}`,
            identifier: +post.id, // Single post id
            title: post.title // Single post title
        }}
      />
    </div>
  )
}

export default DisqusComments;
