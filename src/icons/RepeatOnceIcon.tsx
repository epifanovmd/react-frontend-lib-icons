import React, { FC, memo } from 'react';
import RepeatOnceSvg from '../svg/repeat-once.svg';

export interface IRepeatOnceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RepeatOnceIcon: FC<IRepeatOnceIconProps> = memo(props => {
  return <RepeatOnceSvg {...props} />;
});
