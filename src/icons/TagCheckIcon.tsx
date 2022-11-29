import React, { FC, memo } from 'react';
import TagCheckSvg from '../svg/tag-check.svg';

export interface ITagCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagCheckIcon: FC<ITagCheckIconProps> = memo(props => {
  return <TagCheckSvg {...props} />;
});
