import React, { FC, memo } from 'react';
import EmoticonOutlineSvg from '../svg/emoticon-outline.svg';

export interface IEmoticonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonOutlineIcon: FC<IEmoticonOutlineIconProps> = memo(props => {
  return <EmoticonOutlineSvg {...props} />;
});
