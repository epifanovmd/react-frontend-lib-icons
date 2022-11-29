import React, { FC, memo } from 'react';
import DatabasePlusOutlineSvg from '../svg/database-plus-outline.svg';

export interface IDatabasePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabasePlusOutlineIcon: FC<IDatabasePlusOutlineIconProps> = memo(props => {
  return <DatabasePlusOutlineSvg {...props} />;
});
