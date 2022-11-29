import React, { FC, memo } from 'react';
import JsfiddleSvg from '../svg/jsfiddle.svg';

export interface IJsfiddleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JsfiddleIcon: FC<IJsfiddleIconProps> = memo(props => {
  return <JsfiddleSvg {...props} />;
});
