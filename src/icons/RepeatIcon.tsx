import React, { FC, memo } from 'react';
import RepeatSvg from '../svg/repeat.svg';

export interface IRepeatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RepeatIcon: FC<IRepeatIconProps> = memo(props => {
  return <RepeatSvg {...props} />;
});
