import React, { FC, memo } from 'react';
import KettlePourOverSvg from '../svg/kettle-pour-over.svg';

export interface IKettlePourOverIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettlePourOverIcon: FC<IKettlePourOverIconProps> = memo(props => {
  return <KettlePourOverSvg {...props} />;
});
