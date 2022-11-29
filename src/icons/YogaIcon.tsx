import React, { FC, memo } from 'react';
import YogaSvg from '../svg/yoga.svg';

export interface IYogaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YogaIcon: FC<IYogaIconProps> = memo(props => {
  return <YogaSvg {...props} />;
});
