import React, { FC, memo } from 'react';
import TagMultipleSvg from '../svg/tag-multiple.svg';

export interface ITagMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagMultipleIcon: FC<ITagMultipleIconProps> = memo(props => {
  return <TagMultipleSvg {...props} />;
});
