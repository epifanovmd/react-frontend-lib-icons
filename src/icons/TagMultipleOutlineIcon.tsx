import React, { FC, memo } from 'react';
import TagMultipleOutlineSvg from '../svg/tag-multiple-outline.svg';

export interface ITagMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagMultipleOutlineIcon: FC<ITagMultipleOutlineIconProps> = memo(props => {
  return <TagMultipleOutlineSvg {...props} />;
});
