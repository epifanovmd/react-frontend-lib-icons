import React, { FC, memo } from 'react';
import TagOffSvg from '../svg/tag-off.svg';

export interface ITagOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagOffIcon: FC<ITagOffIconProps> = memo(props => {
  return <TagOffSvg {...props} />;
});
