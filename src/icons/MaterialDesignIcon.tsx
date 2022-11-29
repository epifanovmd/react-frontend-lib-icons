import React, { FC, memo } from 'react';
import MaterialDesignSvg from '../svg/material-design.svg';

export interface IMaterialDesignIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MaterialDesignIcon: FC<IMaterialDesignIconProps> = memo(props => {
  return <MaterialDesignSvg {...props} />;
});
