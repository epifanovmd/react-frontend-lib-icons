import React, { FC, memo } from 'react';
import EmoticonConfusedSvg from '../svg/emoticon-confused.svg';

export interface IEmoticonConfusedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonConfusedIcon: FC<IEmoticonConfusedIconProps> = memo(props => {
  return <EmoticonConfusedSvg {...props} />;
});
