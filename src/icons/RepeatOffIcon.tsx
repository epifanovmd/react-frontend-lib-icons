import React, { FC, memo } from 'react';
import RepeatOffSvg from '../svg/repeat-off.svg';

export interface IRepeatOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RepeatOffIcon: FC<IRepeatOffIconProps> = memo(props => {
  return <RepeatOffSvg {...props} />;
});
