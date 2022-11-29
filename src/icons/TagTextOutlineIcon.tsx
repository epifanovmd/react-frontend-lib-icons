import React, { FC, memo } from 'react';
import TagTextOutlineSvg from '../svg/tag-text-outline.svg';

export interface ITagTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagTextOutlineIcon: FC<ITagTextOutlineIconProps> = memo(props => {
  return <TagTextOutlineSvg {...props} />;
});
