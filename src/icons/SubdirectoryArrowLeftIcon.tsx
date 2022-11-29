import React, { FC, memo } from 'react';
import SubdirectoryArrowLeftSvg from '../svg/subdirectory-arrow-left.svg';

export interface ISubdirectoryArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubdirectoryArrowLeftIcon: FC<ISubdirectoryArrowLeftIconProps> = memo(props => {
  return <SubdirectoryArrowLeftSvg {...props} />;
});
