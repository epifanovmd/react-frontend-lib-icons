import React, { FC, memo } from 'react';
import HomeImportOutlineSvg from '../svg/home-import-outline.svg';

export interface IHomeImportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeImportOutlineIcon: FC<IHomeImportOutlineIconProps> = memo(props => {
  return <HomeImportOutlineSvg {...props} />;
});
