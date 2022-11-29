import React, { FC, memo } from 'react';
import TagOffOutlineSvg from '../svg/tag-off-outline.svg';

export interface ITagOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagOffOutlineIcon: FC<ITagOffOutlineIconProps> = memo(props => {
  return <TagOffOutlineSvg {...props} />;
});
