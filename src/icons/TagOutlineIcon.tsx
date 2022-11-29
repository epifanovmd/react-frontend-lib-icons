import React, { FC, memo } from 'react';
import TagOutlineSvg from '../svg/tag-outline.svg';

export interface ITagOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagOutlineIcon: FC<ITagOutlineIconProps> = memo(props => {
  return <TagOutlineSvg {...props} />;
});
