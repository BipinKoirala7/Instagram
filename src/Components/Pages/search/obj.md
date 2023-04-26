return {
          comments_disabled: item.node.comments_disabled,
          Pic_dimensions: item.node.dimensions,
          photo_url: item.node.display_url,
          like_count: item.node.edge_liked_by,
          caption: item.node.edge_media_to_caption,
          comment_count: item.node.edge_media_to_comment,
          user_id: item.node.id,
          is_video: item.node.is_video,
          posts_owner: item.node.owner,
          post_shortcode: item.node.shortcode,
          thumbnail_resources: item.node.thumbnail_resources,
        };