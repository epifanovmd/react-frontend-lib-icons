import React, { FC, memo } from 'react';
import DatabaseArrowLeftOutlineSvg from '../svg/database-arrow-left-outline.svg';

export interface IDatabaseArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowLeftOutlineIcon: FC<IDatabaseArrowLeftOutlineIconProps> = memo(props => {
  return <DatabaseArrowLeftOutlineSvg {...props} />;
});
