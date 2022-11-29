import React, { FC, memo } from 'react';
import ChurchOutlineSvg from '../svg/church-outline.svg';

export interface IChurchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChurchOutlineIcon: FC<IChurchOutlineIconProps> = memo(props => {
  return <ChurchOutlineSvg {...props} />;
});
