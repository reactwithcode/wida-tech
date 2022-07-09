import React, { useState } from 'react';
import { Button, Form, Modal, Col, Row, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Formik, ErrorMessage, FieldArray, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../redux/actions/dashboard.action';

const yesterday = new Date(Date.now() - 86400000);

const schema = Yup.object().shape({
	title: Yup.string().required(),
	description: Yup.string().required(),
	members: Yup.array()
		.of(Yup.string().min(2, 'too short').required('Required'))
		.required('Must have members')
		.min(1, 'Minimum of 3 members'),
	date: Yup.date().required().min(yesterday, 'Date cannot be in the past'),
});

function AddEventModal({ show, handleClose }) {
	const dispatch = useDispatch();
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add a new event</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<Formik
							validationSchema={schema}
							onSubmit={(values) => {
								dispatch(addEvent(values));
							}}
							initialValues={{
								id: uuidv4(),
								title: '',
								description: '',
								members: ['Person 1', 'Person 2'],
								date: '',
							}}
						>
							{({
								handleSubmit,
								handleChange,
								handleBlur,
								values,
								touched,
								isValid,
								errors,
							}) => (
								<div>
									<Form noValidate onSubmit={handleSubmit}>
										<Row className="mb-3">
											<Form.Group
												as={Col}
												md="4"
												controlId="validationFormik01"
											>
												<Form.Label>Title</Form.Label>
												<Form.Control
													type="text"
													name="title"
													value={values.title}
													onChange={handleChange}
													isValid={touched.title && !errors.title}
												/>
												<Form.Control.Feedback>
													Looks good!
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="8"
												controlId="validationFormik02"
											>
												<Form.Label>Description</Form.Label>
												<Form.Control
													type="text"
													name="description"
													value={values.description}
													onChange={handleChange}
													isValid={touched.description && !errors.description}
												/>

												<Form.Control.Feedback>
													Looks good!
												</Form.Control.Feedback>
											</Form.Group>
										</Row>
										<Row className="mb-3">
											<Form.Group
												as={Col}
												md="4"
												controlId="validationFormik05"
											>
												<Form.Label>Date</Form.Label>
												<Form.Control
													type="date"
													placeholder="Date"
													name="date"
													value={values.date}
													onChange={handleChange}
													isInvalid={!!errors.date}
												/>

												<Form.Control.Feedback type="invalid">
													{errors.date}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="6"
												controlId="validationFormik03"
											>
												<Form.Label>Members</Form.Label>

												<FieldArray
													name="members"
													render={(arrayHelpers) => (
														<div>
															{values.members.map((member, index) => (
																<div key={index} className="d-flex">
																	<Form.Control
																		className="mr-3"
																		type="text"
																		name={`members.${index}`}
																		onChange={handleChange}
																	/>

																	<Button
																		type="button"
																		onClick={() => arrayHelpers.remove(index)}
																	>
																		-
																	</Button>
																</div>
															))}
															<Button
																className="mt-3"
																type="button"
																onClick={() => arrayHelpers.push('')}
															>
																+
															</Button>
														</div>
													)}
												/>

												<Form.Control.Feedback type="invalid">
													{errors.members}
												</Form.Control.Feedback>
											</Form.Group>
										</Row>
										<Button className="mt-5" type="submit">
											Add
										</Button>
									</Form>
								</div>
							)}
						</Formik>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default AddEventModal;
