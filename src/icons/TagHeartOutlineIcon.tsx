import React, { FC, memo } from 'react';
import TagHeartOutlineSvg from '../svg/tag-heart-outline.svg';

export interface ITagHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagHeartOutlineIcon: FC<ITagHeartOutlineIconProps> = memo(props => {
  return <TagHeartOutlineSvg {...props} />;
});
