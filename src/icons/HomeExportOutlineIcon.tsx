import React, { FC, memo } from 'react';
import HomeExportOutlineSvg from '../svg/home-export-outline.svg';

export interface IHomeExportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeExportOutlineIcon: FC<IHomeExportOutlineIconProps> = memo(props => {
  return <HomeExportOutlineSvg {...props} />;
});
