import React, { FC, memo } from 'react';
import DatabaseArrowRightOutlineSvg from '../svg/database-arrow-right-outline.svg';

export interface IDatabaseArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowRightOutlineIcon: FC<IDatabaseArrowRightOutlineIconProps> = memo(props => {
  return <DatabaseArrowRightOutlineSvg {...props} />;
});
