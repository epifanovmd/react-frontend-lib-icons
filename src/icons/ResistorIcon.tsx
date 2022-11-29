import React, { FC, memo } from 'react';
import ResistorSvg from '../svg/resistor.svg';

export interface IResistorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ResistorIcon: FC<IResistorIconProps> = memo(props => {
  return <ResistorSvg {...props} />;
});
