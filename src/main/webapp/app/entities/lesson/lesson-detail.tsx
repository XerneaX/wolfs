import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './lesson.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const LessonDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const lessonEntity = useAppSelector(state => state.lesson.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="lessonDetailsHeading">
          <Translate contentKey="wolfsvalleyApp.lesson.detail.title">Lesson</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="wolfsvalleyApp.lesson.name">Name</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.name}</dd>
          <dt>
            <span id="desc">
              <Translate contentKey="wolfsvalleyApp.lesson.desc">Desc</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.desc}</dd>
          <dt>
            <span id="price">
              <Translate contentKey="wolfsvalleyApp.lesson.price">Price</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.price}</dd>
          <dt>
            <Translate contentKey="wolfsvalleyApp.lesson.course">Course</Translate>
          </dt>
          <dd>{lessonEntity.course ? lessonEntity.course.id : ''}</dd>
          <dt>
            <Translate contentKey="wolfsvalleyApp.lesson.customer">Customer</Translate>
          </dt>
          <dd>{lessonEntity.customer ? lessonEntity.customer.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/lesson" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/lesson/${lessonEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default LessonDetail;
