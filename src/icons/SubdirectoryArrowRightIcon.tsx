import React, { FC, memo } from 'react';
import SubdirectoryArrowRightSvg from '../svg/subdirectory-arrow-right.svg';

export interface ISubdirectoryArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubdirectoryArrowRightIcon: FC<ISubdirectoryArrowRightIconProps> = memo(props => {
  return <SubdirectoryArrowRightSvg {...props} />;
});
