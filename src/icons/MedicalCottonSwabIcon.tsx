import React, { FC, memo } from 'react';
import MedicalCottonSwabSvg from '../svg/medical-cotton-swab.svg';

export interface IMedicalCottonSwabIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MedicalCottonSwabIcon: FC<IMedicalCottonSwabIconProps> = memo(props => {
  return <MedicalCottonSwabSvg {...props} />;
});
