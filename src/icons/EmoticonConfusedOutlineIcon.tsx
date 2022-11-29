import React, { FC, memo } from 'react';
import EmoticonConfusedOutlineSvg from '../svg/emoticon-confused-outline.svg';

export interface IEmoticonConfusedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonConfusedOutlineIcon: FC<IEmoticonConfusedOutlineIconProps> = memo(props => {
  return <EmoticonConfusedOutlineSvg {...props} />;
});
